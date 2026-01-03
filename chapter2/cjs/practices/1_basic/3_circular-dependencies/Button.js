const { useTranslation } = require("./i18n");

function Button() {
  const t = useTranslation();
  return t("button.confirm");
}

module.exports = { Button };
