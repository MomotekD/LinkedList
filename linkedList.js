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
        
    }
}

class Node {
    constructor(value, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

export{Node, LinkedList}