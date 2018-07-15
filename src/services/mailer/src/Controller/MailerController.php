<?php


namespace App\Controller;


use App\Form\Mailer\MailType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class MailerController extends AbstractController
{

    /**
     * @Route("/send")
     * @Method("POST")
     * @param array         $data
     * @param \Swift_Mailer $swift
     *
     * @return JsonResponse
     */
    public function send(array $data, \Swift_Mailer $swift) : JsonResponse
    {
        $form = $this->createForm(MailType::class);

        $form->submit($data);

        if ($form->isSubmitted() && $form->isValid()) {
            $mail = $form->getData();
            $message = new \Swift_Message($mail->getSubject());
            $message->setFrom($mail->getSender());
            $message->setTo($mail->getReceiver());
            $message->setBody($mail->getBody());
            $swift->send($message);

            return new JsonResponse(null, JsonResponse::HTTP_OK);
        }

        return new JsonResponse(null, JsonResponse::HTTP_CONFLICT);

    }
}