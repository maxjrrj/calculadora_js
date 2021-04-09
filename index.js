class Calculadora {

    
    position = 1
    value1 = '0'
    value2 = '0'
    operator = ''
    result = '0'

    show(v){
        $('.display-calc').val(v)
    }

    calc(v1,v2,op){

        if (op == '+') {
            this.result = parseInt(v1) + parseInt(v2)
        } else 
        if (op == '-') {
            this.result = parseInt(v1) - parseInt(v2)
        } else 
        if (op == '*') {
            this.result = parseInt(v1) * parseInt(v2)
        } else
        if (op == '/') {
            this.result = parseInt(v1) / parseInt(v2)
        }
        if (op == '=') {this.result = this.value2}
        
        this.value1 = this.result
        this.position = 1
        this.value2 = '0'
        this.show(this.result)

    }

    cls(){        
        this.value1 = '0'
        this.value2 = '0'
        this.position = 1
        this.operator = ''
        this.result = '0'
        this.show('0')
        console.log('limpooooou')
    }
    
    addValue(v){

        if (this.position == 1){

        if (this.value1 == '0'){

            this.value1 = v
            this.show(this.value1)

        } else {
            this.value1 += v
            this.show(this.value1)
        }}

        if (this.position == 2){

        if (this.value2 == '0'){

            this.value2 = v

            this.show(this.value2)

            } else {

                this.value2 += v

                this.show(this.value2)
            }
        }
    }

    addOperator(op){
        
        if (this.position == 2) {
            this.calc(this.value1,this.value2,this.operator)

        } else if (this.position == 1) {
            this.operator = op
            this.position = 2
            this.show(this.value2)
        }
    }
}