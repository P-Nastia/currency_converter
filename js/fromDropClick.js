const FromDropClick = () => {
    const dropdownButton = document.getElementById('dropdownButtonFrom');
    const currencyOptions = document.querySelectorAll('.currency-option-from');
    const dropdownMenu = document.getElementById('dropdownMenuFrom');

    dropdownButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('hidden');
    });

    currencyOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedCurrency = option.getAttribute('data-value');
            dropdownButton.innerHTML = `${selectedCurrency} <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`;

            dropdownMenu.classList.add('hidden');
        });
    });


}