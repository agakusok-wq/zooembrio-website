/** FormSubmit.co — статический сайт без своего бэкенда. */

const DEFAULT_RECIPIENT = 'info@zooembrio.ru';
const DEFAULT_CC = 'bmvz-8@yandex.ru';

export function getFormRecipientEmail(): string {
  const fromEnv = import.meta.env.PUBLIC_FORM_EMAIL?.trim();
  return fromEnv || DEFAULT_RECIPIENT;
}

export function getFormCcEmail(): string {
  const cc = import.meta.env.PUBLIC_FORM_CC?.trim();
  return cc || DEFAULT_CC;
}

/** Classic POST (fallback без JS). */
export function getFormSubmitAction(): string {
  return `https://formsubmit.co/${encodeURIComponent(getFormRecipientEmail())}`;
}

/** AJAX endpoint — остаёмся на странице, показываем плашку. */
export function getFormSubmitAjaxAction(): string {
  return `https://formsubmit.co/ajax/${encodeURIComponent(getFormRecipientEmail())}`;
}

export type FormKind = 'contact' | 'cart';

export function getFormSubject(kind: FormKind, locale: 'ru' | 'en' = 'ru'): string {
  if (kind === 'cart') {
    return locale === 'en' ? 'ZOOEMBRIO order (manual invoice)' : 'Заказ ZOOEMBRIO (счёт вручную)';
  }
  return locale === 'en' ? 'ZOOEMBRIO website inquiry' : 'Заявка с сайта ZOOEMBRIO';
}

export function getThankYouMessage(locale: 'ru' | 'en' = 'ru'): string {
  return locale === 'en'
    ? 'Thank you! Our managers will contact you shortly!'
    : 'Спасибо! В ближайшее время наши менеджеры свяжутся с вами!';
}

export function getFormErrorMessage(locale: 'ru' | 'en' = 'ru'): string {
  return locale === 'en'
    ? 'Could not send the form. Please try again or email us directly.'
    : 'Не удалось отправить заявку. Попробуйте ещё раз или напишите нам на почту.';
}
