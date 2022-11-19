<?php

error_reporting(0);

$data = $json = file_get_contents('php://input'); 
try {
    $data = json_decode($data, true);
} catch (\Exception $e) {
    $data = [];
}

$name = $data['name'] ?? null;
$tel = $data['tel'] ?? null;
$telegram = $data['telegram'] ?? null;
$instagram = $data['instagram'] ?? null;

if ($telegram && $instagram && $name && $tel) {
    $text = 'У тебя новая заявка! ЮХУ!' . PHP_EOL;
    $text .= 'Name: ' . $name . PHP_EOL;
    $text .= 'Tel: ' . $tel . PHP_EOL;
    $text .= 'Telegram: ' . $telegram . PHP_EOL;
    $text .= 'Instagram: ' . $instagram . PHP_EOL;
    $text .= 'Люблю тебя ♡' . PHP_EOL;

    $params = [
        'chat_id' => 1000067268,
        'text' => $text,
    ];

    file_get_contents('https://api.telegram.org/bot' . '5683309659:AAGId-OXYWrjbuSTUqtHhAE0yxsOoWHhZDM' . '/sendMessage?' . http_build_query($params));
    http_response_code(200);
} else {
    http_response_code(422);
}
