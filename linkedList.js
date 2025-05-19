class LinkedList {
    constructor(){
        this.head = null;
    }
    append(value){
        if (this.head === null){
            this.head = new Node(value);
        }else{
            let current = this.head;
            while(current.nextNode !== null){
                current = current.nextNode;
            }
            current.nextNode = new Node(value);
        }
    }
    toString(){
        let current = this.head;
        let result = '';
        while(current !== null){
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        result += 'null';
        return result;
    }
    prepend(value){
        if (this.head === null){
            this.head = new Node(value);
        }else{
            this.head = new Node(value, this.head);
        }
    }
    size(){
        let count = 0;
        let current = this.head;
        while(current !== null){
            current = current.nextNode;
            count++;
        }
        return count;
    }
    getHead(){
        return this.head;
    }
    getTail(){
        let current = this.head;
        while(current !== null){
            if(current.nextNode === null){
                return current;
            }
            current = current.nextNode;
        }
    }
    atIndex(n){
        let current = this.head;
        for(let i = 0; i < n; i++){
            if(current === null){
                return null;
            }
            current = current.nextNode;
        }
        return current;
    }
    pop(){
        let current = this.head;
        if(this.head === null){
            return null
        }
        if(current.nextNode === null){
            const deletedNode = current;
            this.head = null;
            return deletedNode;
        }
        while(current !== null){
            if(current.nextNode.nextNode === null){
                const deletedNode = current.nextNode;
                current.nextNode = null;
                return deletedNode;
            }
            current = current.nextNode;
        }
        return null;
    }
    contains(value){
        let current = this.head;
        while(current !== null){
            if(current.value === value){
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }
    find(value){
        let current = this.head;
        let index = 0;
        while(current !== null){
            if(current.value === value){
                return index;
            }
            current = current.nextNode;
            index++
        }
        return null;
    }
    insertAt(value, index){
        const newNode = new Node(value);
        let current = this.head;
        if(index === 0){
                newNode.nextNode = this.head;
                this.head = newNode;
                return newNode;
            }
        if(index >= this.size() + 1 || index < 0){
            return null
        }
        for(let i = 0; i <= index; i++){
            if(current === null){
                return null;
            }
            if(i === index - 1){
                newNode.nextNode = current.nextNode;
                current.nextNode = newNode;
                return newNode;
            }
            current = current.nextNode;
        }
    }
    removeAt(index){
        let current = this.head;
        if(current === null){
            return null;
        }
        if(index === 0){
            this.head = current.nextNode;
            return current
        }
        if(index >= this.size() || index < 0){
            return null
        }
        for(let i = 0; i < index; i++){
            if(current === null){
                return null;
            }
            if(i === index - 1){
                if(current.nextNode === null){
                    return null
                }
                const deletedNode = current.nextNode;
                current.nextNode = current.nextNode.nextNode;
                return deletedNode;
            }
            current = current.nextNode;
        }
    }
}

class Node {
    constructor(value, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

export{Node, LinkedList}