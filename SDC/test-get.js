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

const getQuestion = "http://localhost:3004/qa/9999995/"
const getAnswer = "http://localhost:3004/qa/9999995/answers"





//GET REQ
export default () => {
  let res = http.get(getQuestion);
  const result = check(res, {
    "is status 200": (r) => r.status == 200
  });
  errorRate.add(!result);
  sleep(1)
}




