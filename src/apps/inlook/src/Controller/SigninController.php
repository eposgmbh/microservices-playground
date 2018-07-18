<?php

namespace App\Controller;

use App\Form\ProviderType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SigninController extends Controller
{

    private const SALT = '8d9a8sd9a6d';

    /**
     * @Route("/signin", name="signin")
     * @param Request          $request
     *
     * @param SessionInterface $session
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request, SessionInterface $session)
    {

        if ($sessionData = $session->get('mailprovider')){
            return $this->redirectToRoute('inbox');
        }

        $form = $this->createForm(ProviderType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $session->set('mailprovider',$data);
        }

        return $this->render('signin/index.html.twig', [
            'controller_name' => 'SigninController',
            'form' => $form->createView()
        ]);
    }
}
