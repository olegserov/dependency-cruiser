const recommended = require('./recommended');

module.exports = Object.assign(
    {},
    recommended,
    {
        forbidden: recommended.forbidden.map(
            pRule => {
                pRule.severity = "error";
                return pRule;
            }
        )
    }
);
