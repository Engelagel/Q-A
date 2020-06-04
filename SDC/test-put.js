import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export let options = {
  vus: 1,
  duration: '5s',
  stages: [
    {duration: "30s", target: 10},
    {duration: "1m30s", target: 100},
    {duration: "20s", target: 50},
  ]
}


const putQHelpful = "http://localhost:3004/qa/question/9999995/helpful"
const putQReport = "http://localhost:3004/qa/question/9999995/report"
const putAHelpful = "http://localhost:3004/qa/answer/9999995/helpful"
const putAReport = "http://localhost:3004/qa/answer/9999995/report"



//PUT REQ
export default () => {
  let res = http.put(putQHelpful);
  const result = check(res, {
    "is status 201": (r) => r.status == 201
  });
  errorRate.add(!result);
  sleep(1)
}