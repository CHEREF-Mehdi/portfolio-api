import Joi from 'joi';

export interface IContactFormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const messages = (fieldName?: string) => {
  return {
    'string.base': `${fieldName} should be of type "text"`,
    'any.empty': `${fieldName} should not be empty`,
    'any.required': `${fieldName} is required`,
    'string.min': `${fieldName} should have at least {#limit} characters!`,
    'string.max': `${fieldName} should have at most {#limit} characters!`,
    'string.email': `Please enter a valid email address`,
  };
};

const requiredAndNotEmptyStr = Joi.string().required().trim().empty();

export const contactFormSchema = Joi.object<IContactFormData>()
  .keys({
    name: requiredAndNotEmptyStr.min(3).max(30).messages(messages('Name')),
    email: requiredAndNotEmptyStr.email().messages(messages()),
    subject: requiredAndNotEmptyStr
      .min(5)
      .max(50)
      .messages(messages('Subject')),
    message: requiredAndNotEmptyStr.min(30).messages(messages('Message')),
  });

// 'any.custom': [Object],
// 'any.default': [Object],
// 'any.failover': [Object],
// 'any.invalid': [Object],
// 'any.only': [Object],
// 'any.ref': [Object],
// 'any.required': [Object],
// 'any.unknown': [Object],
// 'string.alphanum': [Object],
// 'string.base': [Object],
// 'string.base64': [Object],
// 'string.creditCard': [Object],
// 'string.dataUri': [Object],
// 'string.domain': [Object],
// 'string.email': [Object],
// 'string.empty': [Object],
// 'string.guid': [Object],
// 'string.hex': [Object],
// 'string.hexAlign': [Object],
// 'string.hostname': [Object],
// 'string.ip': [Object],
// 'string.ipVersion': [Object],
// 'string.isoDate': [Object],
// 'string.isoDuration': [Object],
// 'string.length': [Object],
// 'string.lowercase': [Object],
// 'string.max': [Object],
// 'string.min': [Object],
// 'string.normalize': [Object],
// 'string.token': [Object],
// 'string.pattern.base': [Object],
// 'string.pattern.name': [Object],
// 'string.pattern.invert.base': [Object],
// 'string.pattern.invert.name': [Object],
// 'string.trim': [Object],
// 'string.uri': [Object],
// 'string.uriCustomScheme': [Object],
// 'string.uriRelativeOnly': [Object],
// 'string.uppercase': [Object]
