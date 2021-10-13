<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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
Route::post('contact_us', [CustomController::class, 'contactUs']);
Route::post('e_classes', [CustomController::class, 'eClasses']);
Route::get('e_class_detail/{e_classes_id}', [CustomController::class, 'eClassDetail']);

$router->group(['middleware' => 'auth:api'], function () use ($router) {
    Route::post('logout', [AuthController::class, 'Logout']);
    Route::get('/TokenVerify', function () {
        return ['data' => 'Token is valid'];
    });
    Route::post('/profile_about', [ServiceController::class, 'providerProfileAbout'])->name('/profile_about');
    Route::post('/profile_video', [ServiceController::class, 'providerProfileVideo'])->name('/profile_video');
    Route::post('/profile_service', [ServiceController::class, 'providerProfileServices'])->name('/profile_service');
    Route::post('/profile_detail', [ServiceController::class, 'providerProfileDetails'])->name('/profile_detail');

    Route::post('/profile_data', [ServiceController::class, 'providerProfileData'])->name('/profile_data');
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
