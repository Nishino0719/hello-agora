import firebase from 'firebase/app'

export interface Room {
  startedAt: firebase.firestore.Timestamp
  finishedAt: firebase.firestore.Timestamp
  isFinished: boolean
  maxValue: number
  sumValue: number
  value: number
}
