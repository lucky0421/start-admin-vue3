import { createI18n } from "vue-i18n";
import { LOCAL_KEYS } from "../common/enum";
import useLocalStorage from "../hooks/useLocalStorage";

export const I18n = createI18n({
  locale: useLocalStorage().getKey(LOCAL_KEYS.Locale),
  messages: {},
});

export default I18n;
