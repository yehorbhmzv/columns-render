import React, {useState} from 'react';

import Table from "./components/table";

const tableSchemaMock = {
  name: {
    title: 'Name',
    type: 'string',
    ordinateNo: 1,
    width: 200,
  },
  email: {
    title: 'Email',
    type: 'string',
    ordinateNo: 2,
    width: 350,
  },
  age: {
    title: 'Age',
    type: 'number',
    ordinateNo: 3,
    width: 150,
  },
  gender: {
    title: 'Gender',
    type: 'options',
    ordinateNo: 4,
    width: 150,
  }
}
const dataMock = {
  qtVzH0AxXE: {
    name: 'Yehor',
    email: 'yehor@gmail.com',
    age: 25,
    gender: 1
  },
  Exiqg1RGar: {
    name: 'Danko',
    email: 'danko@gmail.com',
    age: 42,
    gender: 0
  },
  eL0zVUfzL8: {
    name: 'Arrow',
    email: 'arrow@gmail.com',
    age: 32,
    gender: 0
  },
  sM2T0fktm7: {
    name: 'Cringe',
    email: 'cringe@gmail.com',
    age: 666,
    gender: 1
  },
  lo6nO6fvh9: {
    name: 'Bored',
    email: 'bored@gmail.com',
    age: 17,
    gender: 1
  },
  XLqKCwGyDA: {
    name: 'Lina',
    email: 'lina@gmail.com',
    age: 24,
    gender: 0
  },
  A0EzIetO6s: {
    name: 'Polina',
    email: 'polina@gmail.com',
    age: 26,
    gender: 0
  },
  U6QtcePf1v: {
    name: 'John',
    email: 'john@gmail.com',
    age: 26,
    gender: 1
  },
  R6FgJp9qvQ: {
    name: 'Carl',
    email: 'carl@gmail.com',
    age: 45,
    gender: 1
  },
  aGbyLAGIvb: {
    name: 'Westphal'
  },
  Kj0DCAM4I0: {
    name: 'Eastphal'

  },
  bhjhofsAsI: {
    name: 'Blufor'

  },
  F8vT5FK3Jy: {
    name: 'Opfor'
  },
  FfGsEqPo4f: {    name: 'Alice in Chains'
  },
  nRKw17AuXN: {
    name: 'Say My Name'
  },
  AqGZv1p4vE: {
    name: 'East Side Ballas'
  },
  Qj0EKtqs78: {
    name: 'West Side Groove St.'
  },
  fPAJuvdtsx: {
    name:'Warrior Los Aztecas'
  },
  JBPrWj5TER: {
    name: 'Los Santos Vagos'
  },
  yfFVWOHHTz: {
    name: 'San Fierro Rifa'
  },
  nZHBfGQ46R: {
    name: 'El Coronos'
  },
  CauTftsi6X: {
    name: 'La Cosa Nostra'
  },
  MKmc6Inepev: {},
  QsvBMfq3gC: {},
  XkLQaA8Oty: {},
  eilbhPVk9z: {},
  StCa5gbMm4: {},
  jqaUvbQ9ac: {},
  O6lSGFQtTZ: {},
  sFVAEVd2pq: {},
  p0khaPcNo4: {},
  FK0EaT2WuIv: {},
  jIYXqFnluH: {},
  SMHQs1JmVd: {},
  NxgL0N75zg: {},
  jeeNSghn5A: {},
  tGlPzUHgrf: {},
  Mcj6k8aXyN: {},
  AKkeyAmcwF: {},
  MYeW9iaCoD: {},
  CtGvYReXuX: {},
  eZqNrvw8cV: {},
  UPAdofbjFG: {},
  dWXoTRIETN: {},
  nTEpvHy8W7: {},
  gFl7A2HGNn: {},
  sK8Jk31zqJ: {},
  GVqw7tjysd: {},
  KCJSdJbe0w: {},
}

const App = () => {

  const [data, setData] = useState(dataMock);
  const [schema, setSchema] = useState(tableSchemaMock)

  const updateData = (payload: any) => setData(payload)
  const updateSchema = (payload: any) => setSchema(payload)

  return <Table schema={schema} rows={data}/>;
}

export default App;
