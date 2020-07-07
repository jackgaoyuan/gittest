const rxjs = require('rxjs')
const { Observable, of, pipe, Subject, from, interval, BehaviorSubject, AsyncSubject, asyncScheduler, defer, fromPromise, timer } = rxjs
const  { map, first, filter, multicast, refCount,observeOn, subscribeOn } = require('rxjs/operators')

const observable = interval(1000)

observable.subscribe({
    next: () => console.log('interval')
})

// const observable = new Observable((observer) => {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.complete();
//   }).pipe(subscribeOn())

// console.log('before subscribe')
// observable.subscribe({
//     next: v => console.log('observer A ',v)
// })
// console.log('after subscribe')


// const subject = new AsyncSubject()

// subject.subscribe({
//     next: v => console.log('observer A ',v)
// })

// subject.next(1)
// subject.next(2)

// subject.subscribe({
//     next: v => console.log('observer B ',v)
// })

// subject.complete()


// const source = interval(500)
// const subject = new Subject()
// const refCounted = source.pipe(multicast(subject), refCount())
// refCounted.subscribe(v => console.log('first sub', v))
// refCounted.subscribe(v => console.log('second sub', v))

// const source = from([1,2,3])
// const subject = new Subject()
// const multicasted = source.pipe(multicast(subject))

// multicasted.subscribe({
//     next: v => console.log('observer A ',v)
// })

// multicasted.subscribe({
//     next: v => console.log('observer B ',v)
// })

// multicasted.connect()

// const ob = new Observable(sub => {
//         sub.next(1)
//         sub.next(2)
//         sub.next(3)
//         setTimeout(() => {
//             sub.next(4)
//         }, 5000)
//         return function unsubscribe() {
//             console.log('unsunscribe obserable')
//         }
// })

// const subscription = ob.subscribe({
//     next(x) {console.log(x)},
//     complete() { console.log('observable complete') },
//     error(e) { console.log(e) }
// })

// subscription.unsubscribe()
// console.log('after')
// of(1, 2, 3).pipe(map(x => x * x), map(x => x + 1)).subscribe((v) => console.log(`value: ${v}`));

// function discardOddDoubleEven() {
//     return pipe(
//       filter(v => ! (v % 2)),
//       map(v => v + v),
//     );
//   }

//   of(1,2,3).pipe(discardOddDoubleEven()).subscribe(v => console.log(v))

// const subject = new Subject()

// subject.subscribe({
//     next: v => console.log('observer A ',v)
// })

// subject.subscribe({
//     next: v => console.log('observer B ', v)
// })

// of(1,2,3).subscribe(subject)
