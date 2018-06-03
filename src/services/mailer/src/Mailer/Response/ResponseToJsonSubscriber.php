<?php


namespace App\Mailer\Response;


use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Turns every returned result into a JsonResponse
 */
class ResponseToJsonSubscriber implements EventSubscriberInterface
{

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => 'onKernelView',
        ];
    }

    public function onKernelView(GetResponseForControllerResultEvent $event) : void
    {
        $data = $event->getControllerResult();
        $event->setResponse(new JsonResponse($data));
    }
}