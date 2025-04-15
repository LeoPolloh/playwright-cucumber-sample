module.exports = {
  default: `--require-module ts-node/register --require ./src/support/**/*.ts --require ./src/steps/**/*.ts --format json:./reports/cucumber_report.json --publish-quiet`
};