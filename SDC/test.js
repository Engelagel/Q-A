import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    {duration: "30s", target: 20},
    {duration: "1m30s", target: 10},
    {duration: "20s", target: 0},
  ]
}

const localGetQuestion = "http://localhost:3004/qa/4579109/"
const localGetAnswer = "http://localhost:3004/qa/1344002/answers"

const localPutQHelpful = "http://localhost:3004/qa/question/7/helpful"
const localPutQReport = "http://localhost:3004/qa/question/7/report"
const localPutAHelpful = "http://localhost:3004/qa/answer/7/helpful"
const localPutAReport = "http://localhost:3004/qa/answer/7/report"

export default () => {
  let res = http.get(localGetQuestion);
  check(res, {
    "status was 200": (r) => r.status == 200
  });
  sleep(1)
}