const LoadList = (to) => {

    if (to == "dropdownButtonFrom") {
        const dropdownButtonTo = document.getElementById('dropdownButtonTo');
        const list = document.getElementById('dropdownMenuFrom');
        axios.get('/js/ccy_list.json')
            .then(resp => {
                const { data } = resp;
                list.innerHTML = null;
                data.forEach(item => {

                    if (item.ccy.includes(dropdownButtonTo.innerText) == false) {

                        list.innerHTML += `
      <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white currency-option-from" data-value="${item.ccy}">
          <div class="inline-flex items-center">
           <img class="flag" src="${item.image}" />
             ${item.ccy}
          </div>
      </button>
      `
                    }
                })

            });
        FromDropClick();
    }
    else {
        const dropdownButtonTo = document.getElementById('dropdownButtonFrom');
        const list = document.getElementById('dropdownMenuTo');
        axios.get('/js/ccy_list.json')
            .then(resp => {
                const { data } = resp;
                list.innerHTML = null;
                data.forEach(item => {

                    if (item.ccy.includes(dropdownButtonTo.innerText) == false) {
                        list.innerHTML += `
      <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white currency-option-to" data-value="${item.ccy}">
          <div class="inline-flex items-center">
           <img class="flag" src="${item.image}" />
             ${item.ccy}
          </div>
      </button>
      `
                    }
                })

            });
        ToDropClick();
    }

}