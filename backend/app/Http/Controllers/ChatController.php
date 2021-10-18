<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Chathead;
use App\Models\Chatmessages;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use OpenTok\OpenTok;
use OpenTok\MediaMode;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
    //
    public function createTokSession(Request $request)
    {
        // var_dump(openssl_get_cert_locations());
        // die();
        $notification = "";
        $apiObj = new OpenTok(env("TOK_API_KEY"), env("TOK_API_SECRET"));
        $session = $apiObj->createSession(array('mediaMode' => MediaMode::ROUTED));
        $token = $session->generateToken();
        // if ($request->user_id) {
        //     $user = User::where("id", $request->user()->id)->first();
        //     $body = $user->first_name . " " . $user->last_name . " is video calling you";
        //     // $notification = sendPushNotification($request->user_id, "Incoming Video Call", $body, $session->getSessionId(), $token);
        // }
        return response()->json(['status' => "success", "msg" => "Session Created", "session_id" => $session->getSessionId(), "session_token" => $token]);
        // echo $session->getSessionId();
    }

    public function sendMessage(Request $request)
    {
        try {
            $check_session = $this->sessionCheck($request);
            $chat = Chatmessages::create([
                'chathead_id'  =>  $check_session['data']->id,
                'to_id'     =>  $request->id,
                'from_id'   =>  Auth::user()->id,
                'message'  =>  $request->message,
            ]);
            // $check_session = $this->sessionCheck($request);
            // echo"<pre>"; print_r($check_session->original); die();
            // $session = $this->createTokSession($request);
            $user = User::where("id", Auth::user()->id)->first();
            // $this->chatData($request->id, "New Message", $request->message, $user->first_name, $user->last_name, $user->profile_pic, $user->id, $check_session->session_id, $check_session->token);
            return response()->json(['status' => 'success', "msg" => "message send successfully", "data" => $chat]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'msg' => $e->getMessage()]);
        }
    }

    public function sessionCheck(Request $request)
    {
        $chathead = Chathead::where(['from_id' => Auth::user()->id, 'to_id' => $request->id])
            ->orwhere(['from_id' => $request->id, 'to_id' => Auth::user()->id])
            ->first();
        // echo"<pre>"; print_r($tok->original); die();
        if (empty($chathead)) {
            $tok = $this->createTokSession($request);
            // echo "<pre>";
            // print_r($tok->original);
            // die();
            $chathead = Chathead::create([
                "from_id" => Auth::user()->id,
                "to_id" => $request->id,
                "session_id" => $tok->original['session_id'],
                "token" => $tok->original['session_token']
            ]);

            $this->Notification($request->title, $request->msg, $request->id, $request->type);
            // echo "<pre>";
            // print_r($chathead);
            // die();
        } else {
            // $tok = $this->createTokSession($request);
            // // echo "<pre>";
            // // print_r($tok->original);
            // // die();
            // $chathead = Chathead::where('id', $chathead->id)->update([
            //     "from_id" => Auth::user()->id,
            //     "to_id" => $request->id,
            //     "session_id" => $tok->original['session_id'],
            //     "token" => $tok->original['session_token']
            // ]);

            // $chathead = Chathead::where(['from_id' => Auth::user()->id, 'to_id' => $request->id])
            //     ->orwhere(['from_id' => $request->id, 'to_id' => Auth::user()->id])
            //     ->first();

            // $this->Notification($request->title, $request->msg, $request->id, $request->type);
        }
        // $chats = Chats::where(['from_id'=>$request->user()->id, "to_id"=>$request->id])
        //         ->orwhere(['to_id'=> $request->user()->id, "from_id"=>$request->id])
        //         ->get();
        // $chats = $this->clearData($chats, $request->user()->id, $request->id);
        return ['status' => '200', 'data' => $chathead];
    }


    public function getNotificationCount()
    {
        return DB::table('notification')->where('user_id', Auth::user()->id)->count();
    }
    public function getNotification()
    {
        return DB::table('notification')->where('user_id', Auth::user()->id)->get();
    }

    public function getChatHeads()
    {
        $from_heads = Chathead::join('users', 'users.id', 'chatheads.to_id')->select('users.firstName', 'users.id as msg_to', 'chatheads.*')->where('from_id', Auth::user()->id)->get();
        $to_heads = Chathead::join('users', 'users.id', 'chatheads.from_id')->select('users.firstName', 'users.id as msg_to', 'chatheads.*')->where('to_id', Auth::user()->id)->get();
        $heads = array_merge($from_heads->toArray(), $to_heads->toArray());
        return response()->json(['status' => '200', 'data' => $heads]);
    }

    public function Notification($title, $msg, $RcieverID, $type)
    {

        $data = array(
            'title' => $title,
            'msg' => $msg,
            'user_id' => $RcieverID,
            'type' => $type
        );
        DB::table('notification')->insert($data);
    }
}
