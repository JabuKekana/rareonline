<?php

// Set headers to allow cross-origin requests from your React app
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Check if it's a preflight request (OPTIONS request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); // No content for preflight request
    exit();
}

// Handle your API request here
// Example: Forward the request to the desired API
$api_url = 'https://testapi-v2.peachpayments.com'; // Replace with the actual API URL
$request_headers = getallheaders();

$ch = curl_init($api_url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);
curl_setopt($ch, CURLOPT_POSTFIELDS, file_get_contents('php://input'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $request_headers);

$response = curl_exec($ch);

// Check for errors and handle the response as needed
if ($response === false) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "An error occurred while making the request"]);
} else {
    // Forward the API response to the client
    echo $response;
}

?>
