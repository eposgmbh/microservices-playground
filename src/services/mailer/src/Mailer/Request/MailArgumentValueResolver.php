<?php


namespace App\Mailer\Request;


use App\Mailer\Mail;
use Generator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Controller\ArgumentValueResolverInterface;
use Symfony\Component\HttpKernel\ControllerMetadata\ArgumentMetadata;

/**
 * Takes the data from an rquest, creates an Mail object form it and passes it
 * the action as argument
 */
class MailArgumentValueResolver implements ArgumentValueResolverInterface
{

    /**
     * Checking if this resolver supports the current request
     *
     * @param Request          $request
     * @param ArgumentMetadata $argument
     *
     * @return bool
     */
    public function supports(Request $request, ArgumentMetadata $argument): bool
    {
        return (
            strpos($request->getPathInfo(), '/send') === 0
            && $argument->getType() === 'array'
            && $argument->getName() === 'data'
            && !empty($request->getContent())
        );
    }

    /**
     * @param Request          $request
     * @param ArgumentMetadata $argument
     *
     * @return Generator
     */
    public function resolve(Request $request, ArgumentMetadata $argument): Generator
    {
        $raw = json_decode($request->getContent(), true);
        yield $raw;
    }
}