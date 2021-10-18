<?php

/**
 * PayPal Setting & API Credentials
 * Created by Raza Mehdi <srmk@outlook.com>.
 */

return [
    'mode'    => env('PAYPAL_MODE', 'sandbox'), // Can only be 'sandbox' Or 'live'. If empty or invalid, 'live' will be used.
    'sandbox' => [
        'username'          => env('PAYPAL_SANDBOX_API_USERNAME', ''),
        'password'          => env('PAYPAL_SANDBOX_API_PASSWORD', ''),
        'client_id'         => env('PAYPAL_SANDBOX_CLIENT_ID', ''),
        'secret'            => env('PAYPAL_SANDBOX_CLIENT_SECRET', ''),
        "signature"         => 'AEpkQeo.7CeU2vMwvJUpaJz5A5pwAWbR8bMSXJ.No97KKilZIEOyKmbY',
        'certificate'       => env('PAYPAL_SANDBOX_API_CERTIFICATE', ''),
        'app_id'            => 'App-4827279788357123768',
    ],
    'live' => [
        'client_id'         => env('PAYPAL_LIVE_CLIENT_ID', ''),
        'client_secret'     => env('PAYPAL_LIVE_CLIENT_SECRET', ''),
        'app_id'            => '',
    ],

    'payment_action' => env('PAYPAL_PAYMENT_ACTION', 'Sale'), // Can only be 'Sale', 'Authorization' or 'Order'
    'currency'       => env('PAYPAL_CURRENCY', 'USD'),
    // 'billing_type'   => 'MerchantInitiatedBilling',
    'notify_url'     => env('PAYPAL_NOTIFY_URL', ''), // Change this accordingly for your application.
    'locale'         => env('PAYPAL_LOCALE', 'en_US'), // force gateway language  i.e. it_IT, es_ES, en_US ... (for express checkout only)
    'validate_ssl'   => env('PAYPAL_VALIDATE_SSL', false), // Validate SSL when creating api client.
];
