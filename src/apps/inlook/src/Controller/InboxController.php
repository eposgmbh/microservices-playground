<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class InboxController extends Controller
{
    /**
     * @Route("/inbox", name="inbox")
     */
    public function index(SessionInterface $session)
    {
        $sessionData = $session->get('mailprovider');
        if ($sessionData === null) {
            throw new AccessDeniedHttpException('Zugriff nicht erlaubt');
        }

        $hostname = '{imap.gmail.com:993/imap/ssl}INBOX';
        $inbox = imap_open($hostname,$sessionData['username'],$sessionData['password']) or die('Cannot connect to Gmail: ' . imap_last_error());
        $emails = imap_search($inbox,'ALL');
        dump($emails);
        return $this->render('inbox/index.html.twig', [
            'controller_name' => 'InboxController',
        ]);
    }
}
