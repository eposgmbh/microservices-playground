<?php


namespace App\Controller;


use App\Mailer\Mail;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MailerController extends AbstractController
{

    /**
     * @Route("/send")
     * @Method("POST")
     * @param Mail          $mail
     *
     * @param \Swift_Mailer $swift
     *
     * @return bool
     */
    public function send(Mail $mail, \Swift_Mailer $swift)
    {
        $message = new \Swift_Message($mail->getSubject());
        $message->setFrom($mail->getSender());
        $message->setTo($mail->getReceiver());
        $message->setBody($mail->getBody());

        $swift->send($message);

        return true;
    }
}