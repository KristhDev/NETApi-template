import { NextFunction, Request, Response } from 'express';

/* Constants */
import { validLocales } from '@application/constants';

/* Contracts */
import { TranslationAdapterContract } from '@domain/contracts/adapters';

/* Interfaces */
import { Locales } from '@infrastructure/interfaces';

/* Presentation */
import { BaseMiddleware } from '../base.middleware';

export class LocalizationMiddleware extends BaseMiddleware {
    public constructor(
        private readonly translationAdapter: TranslationAdapterContract
    ) {
        super();
    }

    public handle(req: Request, res: Response, next: NextFunction): void {
        const acceptedLanguage = req.headers['accept-language'] || 'en';

        let [ lang = 'en' ] = acceptedLanguage.split(',');
        lang = lang.split('-')[0] || 'en';

        if (!validLocales.includes(lang as Locales)) lang = 'en';
        this.translationAdapter.changeLanguage(lang as Locales);

        next();
    }
}