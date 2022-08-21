class editor {
    constructor() {
        this.string = ""
        this.undoStack = []
        this.redoStack = []
    }

    replace(newString) {
        this.undoStack.push(this.string)
        this.string = newString
        return this.string
    }

    undo() {
        if (this.undoStack.length === 0) {
            console.log("undodisable")
            return this.string
        }
        this.redoStack.push(this.string)
        this.string = this.undoStack.pop()
        return this.string
    }

    redo() {
        if (this.redoStack.length === 0) {
            console.log("redodisable")
            return this.string
        }
        this.undoStack.push(this.string)
        this.string = this.redoStack.pop()
        return this.string
    }

    bruteForceMatch(targetSubstr) {
        let totalMatch = 0
        let length = targetSubstr.length
        if (length === 0) {
            return 0
        }
        for (let i = 0; i < this.string.length; i++) {
            if (i + length > this.string.length)
                break
            for (let j = 0; j < length; j++) {
                if (targetSubstr[j] === this.string[i + j] && j === length - 1) {
                    totalMatch++
                    i = i + j
                }
                else if (targetSubstr[j] === this.string[i + j]) {
                    continue
                }
                else {
                    break
                }
            }
        }
        return totalMatch
    }

    bruteForceDelete(targetSubstr) {
        this.undoStack.push(this.string)
        let length = targetSubstr.length
        if (length === 0) {
            return 0
        }

        let newStrArray = []
        for (let i = 0; i < this.string.length; i++) {
            for (let j = 0; j < length; j++) {
                if (targetSubstr[j] === this.string[i + j] && j === length - 1) {
                    i = i + j
                }
                else if (targetSubstr[j] === this.string[i + j]) {
                    continue
                }
                else {
                    newStrArray.push(this.string[i])
                    break
                }
            }
        }
        let newString = newStrArray.join("")
        this.string = newString
        //console.log(nums)
        return this.string
    }

    countSpace() {
        let totalSpace = 0
        for(let i = 0; i < this.string.length; i++) {
            if (this.string[i] === ' ') {
                totalSpace++
            }
        }
        return totalSpace
    }

    countLetter() {
        let totalLetter = 0
        for(let i = 0; i < this.string.length; i++) {
            let letter = this.string[i]
            if ((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z')) {
                totalLetter++
            }
        }
        return totalLetter
    }

    countNumbers() {
        let totalNumber = 0
        for(let i = 0; i < this.string.length; i++) {
            let letter = this.string[i]
            if(letter >= '0' && letter <='9') {
                totalNumber++
            }
        }
        return totalNumber
    }

    countTotal() {
        return this.string.length
    }
}


const editorObject = new editor()
export default editorObject