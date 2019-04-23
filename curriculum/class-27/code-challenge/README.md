# Quick Sort

Complete a working, tested implementation of Quick Sort, based on the pseudo code provided

Research and prepare a lecture on the **Quick Sort Algorithm** suitable for delivery to 301 level student. Your lecture notes should be the only material an instructor should need to conduct a high quality lecture on the subject.

## Pseudo Code
```javascript
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the Algorithm
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot
    DEFINE pivot <-- arr[right]
    // get the index of the lower value
    DEFINE low <-- left - 1

    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)
            Swap(arr, right, low + 1)
            return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
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

