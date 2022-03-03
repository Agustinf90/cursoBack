const {Observable, fromEvent} = rxjs;
const {switchMap, map} = rxjs.operators;

const input = document.getElementsByTagName('input')[0]
const span = document.getElementsByTagName('span')[0]

const inputOb$ = fromEvent(input, 'input').pipe(
map(()=> input.value),
switchMap(text => new Observable (observer => {
    if (text === 'error') {observer.error('Esto es un error');
 }  else if(text === 'complete') {observer.complete('Esto se completó')
}   else (observer.next(text)
)
})))
const subscription = inputOb$.subscribe(
    (val) => span.innerHTML = val.split("").reverse().join(""),
    error => console.log('error'),
    complete => console.log('completado')
);

setTimeout(()=> {
    subscription.unsubscribe();
    span.innerHTML ='';
    input.value ='';
},30000
)
