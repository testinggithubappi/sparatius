<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ServiceProfile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'contactno' => ['required', 'string', 'min:8'],
            'roletype' => ['required', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_erros' => $validator->messages(),
            ]);
        } else {
            $user = User::create([
                'firstName' => $request->firstname,
                'LastName' => $request->lastname,
                'contactNo' => $request->contactno,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'roleType' => $request->roletype
            ]);

            $token = $user->createToken($user->email . '_token')->accessToken;
            if ($request->roletype == 'provider') {
                $data = [
                    'userId' => $user->id
                ];
                ServiceProfile::create($data);
            }

            return response()->json([
                'status' => '200',
                'name' => $user->firstName,
                'token' => $token,
                'role' => $request->roletype,
                'message' => 'Register Successfully',

            ]);
        }
    }




    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_erros' => $validator->messages(),
            ]);
        } else {
            $data = [
                'email' => $request->email,
                'password' => $request->password
            ];

            if (auth()->attempt($data)) {

                $user =  auth()->user();
                $token = auth()->user()->createToken($user->email . '_token')->accessToken;

                return response()->json([
                    'status' => '200',
                    'name' => $user->firstName,
                    'token' => $token,
                    'role' => $user->roleType,
                    'id' => $user->id,
                    'message' => 'Login Successfully',

                ]);
            } else {
                return response()->json(['error' => 'Unauthorised'], 401);
            }
        }
    }

    public function Logout(Request $request)
    {

        $request->user()->token()->revoke();

        return response()->json([
            'status' => '200',
            'message' => 'Logut Successfully',

        ]);
    }
    public function TokenVerify(Request $request)
    {

        $res =  $request->user()->check();

        return response()->json([
            'status' => '200',
            'message' => $res,

        ]);
    }
}
