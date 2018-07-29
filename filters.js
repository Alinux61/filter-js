$(document).ready(function() {
    $('.product').hide();
    $('input:checkbox').change(showHideProducts);

        function showHideProducts()
        {
            var checked = $('input:checked');
            var products = $('.product');

            if (checked.length == 0)
            {
                products.hide();
            }
            else
            {
                products.hide();
                checked.each
                (
                    function()
                    {
                        $('.product:contains("' + $(this).val() + '")').show();
                        
                    }         
                );
            }
        }
    });