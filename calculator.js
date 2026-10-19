document.addEventListener("DOMContentLoaded", function(){
    const quantityInput = document.getElementById("product_quantity");
    const productSelect = document.getElementById("sell_product_id");
    const orderForm = document.getElementById("order-form");
    const resultDiv = document.getElementById("calculator_result");

    const regex = /^[1-9][0-9]*$/;

    function Calculate_Current_Price(){
        let current_price = 0
        current_price = parseInt(productSelect.value) * parseInt(quantityInput.value)
        return current_price
    }



    orderForm.addEventListener("submit",function(event){
        event.preventDefault();

        if (!regex.test(quantityInput.value)) {
            resultDiv.textContent = "Ошибка: введите корректное количество!";
            return;
        }

        resultDiv.textContent = "Стоимость товара: " + Calculate_Current_Price() + "Р"
    })
})


