<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CustomController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'Login']);
Route::get('services', [ServiceController::class, 'getServices']);
Route::get('country', [CustomController::class, 'getCountry']);
Route::get('state/{country_id}', [CustomController::class, 'getState']);
Route::get('city/{state_id}', [CustomController::class, 'getCity']);

Route::post('providers', [CustomController::class, 'getTarotProviders']);
Route::get('/provider_detail/{userId}/{serviceId}', [ServiceController::class, 'providerDetail'])->name('/provider_detail');
Route::post('contact_us', [CustomController::class, 'contactUs']);
Route::post('e_classes', [CustomController::class, 'eClasses']);
Route::post('e_class_detail', [CustomController::class, 'eClassDetail']);

Route::get('token', [ChatController::class, 'createTokSession'])->name('token');

Route::post('payment', [BookingController::class, 'payment'])->name('payment');

$router->group(['middleware' => 'auth:api'], function () use ($router) {
    Route::post('logout', [AuthController::class, 'Logout']);
    Route::get('/TokenVerify', function () {
        return ['data' => 'Token is valid'];
    });
    Route::post('/profile_about', [ServiceController::class, 'providerProfileAbout'])->name('/profile_about');
    Route::post('/profile_video', [ServiceController::class, 'providerProfileVideo'])->name('/profile_video');
    Route::post('/profile_service', [ServiceController::class, 'providerProfileServices'])->name('/profile_service');
    Route::post('/profile_detail', [ServiceController::class, 'providerProfileDetails'])->name('/profile_detail');

    Route::get('order_history', [BookingController::class, 'orderHistory'])->name('oder_history');
    Route::post('/profile_data', [ServiceController::class, 'providerProfileData'])->name('/profile_data');

    Route::post('create_chathead', [ChatController::class, 'sessionCheck'])->name('create_chathead');
    Route::post('get_chathead', [ChatController::class, 'getChatHeads'])->name('get_chathead');
    Route::post('send_message', [ChatController::class, 'SendMessage'])->name('send_message');

    Route::post('invite_friend', [CustomController::class, 'inviteFriends'])->name('invite_friend');
    Route::post('add_favorite', [CustomController::class, 'addFavorite'])->name('add_favorite');

    Route::get('user_profile', [CustomController::class, 'userProfile'])->name('user_profile');
    Route::post('edit_profile', [CustomController::class, 'editProfile'])->name('edit_profile');
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::post('register', [PassportAuthController::class, 'register']);
// Route::post('login', [PassportAuthController::class, 'login']);

// Route::middleware('auth:api')->group(function () {
//     // Route::resource('posts', [PostController::class]);
//     Route::resource('posts','PostController');
// });
// Route::post('customerregister', [PassportCustomerAuthController::class, 'register']);
// Route::post('customerlogin', [PassportCustomerAuthController::class, 'login']);
// Route::group( ['prefix' => 'customer','middleware' => ['auth:customer-api','scopes:customer'] ],function(){

//     Route::get('/greeting', function () {
//         return 'Hello World';
//     });

// });
