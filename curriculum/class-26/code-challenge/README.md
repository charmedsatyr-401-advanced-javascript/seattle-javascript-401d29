# Merge Sort

Complete a working, tested implementation of Merge Sort, based on the pseudo code provided

Research and prepare a lecture on the **Merge Sort Algorithm** suitable for delivery to 301 level student. Your lecture notes should be the only material an instructor should need to conduct a high quality lecture on the subject.

## Pseudo Code
```javascript
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if arr > 1
       DECLARE mid <-- n/2
       DECLARE b <-- arr[0...mid]
        // put the second half in the other array
        DECLARE c <-- arr[mid...n]
        Mergesort(b)
        Mergesort(c)
        Merge(B, c, arr)

ALGORITHM Merge(b, c, a)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < b && j < c
        if b[i] <= c[j]
            a[k] <-- b[i]
            i <-- i + 1
        else
            a[k] = c[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = b.Length
       add remaining of c to a
    else
       add remaining b to a
       
    return a
```

## Requirements
### Implementation
* Convert the pseudo-code into working code in your language
* Present a complete set of working tests

### Lecture Notes

* Use the [template](./LECTURE-NOTES.md){:target="_blank"} provided
* 1 short video resource
* 2 quality readings/references
* An organized, ordered lecture outline

* Working pseudo code 
* Description of the algorithm
* Supportive Images

(Basically, a linear version of our Whiteboard)

## Submission

Sumbit a link to your completed version of `LECTURE-NOTES.md`
