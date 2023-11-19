import { defineRule, configure, Form ,Field, ErrorMessage } from "vee-validate";
import * as AllRules from "@vee-validate/rules";
import { localize, setLocale } from '@vee-validate/i18n';

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize("ja", {
    messages: {
      required: "必須です",
      between: "正しい範囲で設定してください"
    }
  })
});
setLocale("ja")

export {
  Form,
  Field,
  ErrorMessage
}