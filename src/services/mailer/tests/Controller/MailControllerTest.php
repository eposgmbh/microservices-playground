<?php


namespace App\Tests\Controller;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Client;
use Symfony\Component\HttpFoundation\Response;

class MailControllerTest extends WebTestCase
{

    public function testMethodGetNotAllowed()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/send');

        $this->assertSame(Response::HTTP_METHOD_NOT_ALLOWED, $client->getResponse()->getStatusCode());

    }

    public function testMailIsNotSent()
    {
        $client = static::createClient();

        // enables the profiler for the next request (it does nothing if the profiler is not available)
        $client->enableProfiler();

        $requestBody = json_encode([
            'receiver' => '',
            'subject' => '',
            'body' => ''
        ]);

        $crawler = $client->request('POST', '/send', [], [], ['CONTENT_TYPE' => 'application/json'], $requestBody);

        $mailCollector = $client->getProfile()->getCollector('swiftmailer');

        // checks that an email was sent
        $this->assertSame(0, $mailCollector->getMessageCount());
    }

    public function testMailIsSentAndContentIsOk()
    {
        $client = static::createClient();

        // enables the profiler for the next request (it does nothing if the profiler is not available)
        $client->enableProfiler();

        $requestBody = $this->getJsonEncodedRequestBody();

        $crawler = $client->request('POST', '/send', [], [], ['CONTENT_TYPE' => 'application/json'], $requestBody);

        $mailCollector = $client->getProfile()->getCollector('swiftmailer');

        // checks that an email was sent
        $this->assertSame(1, $mailCollector->getMessageCount());

        $collectedMessages = $mailCollector->getMessages();
        $message = $collectedMessages[0];

        // Asserting email data
        $this->assertInstanceOf('Swift_Message', $message);
        $this->assertSame('Test Subject', $message->getSubject());
        $this->assertSame('sender@microtest.de', key($message->getFrom()));
        $this->assertSame('receiver@microtest.de', key($message->getTo()));
        $this->assertSame(
            'Test mail content',
            $message->getBody()
        );
    }

    private function getJsonEncodedRequestBody() : string
    {
        return json_encode([
            'sender' => 'sender@microtest.de',
            'receiver' => 'receiver@microtest.de',
            'subject' => 'Test Subject',
            'body' => 'Test mail content'
        ]);
    }
}