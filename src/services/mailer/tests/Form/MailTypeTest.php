<?php


namespace App\Tests\Form;


use App\Form\Mailer\MailType;
use App\Mailer\Mail;
use Symfony\Component\Form\Test\TypeTestCase;

class MailTypeTest extends TypeTestCase
{

    public function testMailIsValid()
    {
        $formData = [
            'sender' => 'sender@example.de',
            'receiver' => 'receiver@example.de',
            'subject' => 'Test subject',
            'body' => 'Test content'
        ];

        $mailToTest = new Mail();
        $mail = Mail::fromArray($formData);
        $form = $this->factory->create(MailType::class, $mailToTest);

        $this->assertFalse($form->isSubmitted());
        $form->submit($formData);

        $this->assertTrue($form->isSubmitted());
        $this->assertTrue($form->isSynchronized());
        $this->assertEquals($mail, $mailToTest);

        $view = $form->createView();
        $children = $view->children;

        foreach (array_keys($formData) as $key) {
            $this->assertArrayHasKey($key, $children);
        }
    }
}