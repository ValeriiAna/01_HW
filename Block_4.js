// Task 1 - Получить строковое название дня недели по номеру дня

function getDayOfWeek(a) {
   let response;
    switch (a) {
        case 1:
            response = "Понедельник";
            break;
        case 2:
            response = "Вторник";
            break;
        case 3:
            response = "Среда";
            break;
        case 4:
            response = "Четверг";
            break;
        case 5:
            response = "Пятница";
            break;
        case 6:
            response = "Суббота";
            break;
        case 7:
            response = "Воскресенье";
            break;

    }
    return response
}
console.log(getDayOfWeek(6))

// Task 2 - Вводим число(0-999), получаем строку с прописью числа.
function getStringView(n) {
    let result = '';
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenths = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = [' one hundred', 'two hundreds', 'three hundreds', 'four hundreds', 'five hundreds', 'six hundreds', 'seven hundreds', 'eight hundreds', 'nine hundreds'];
    const thousands = ['thousand', 'million', 'billion'];
    let number = n.toString().split('');

    if (n < 0 || n !== parseInt(n)) {
        return false;
    } else if (n < 10) {
        return units[n];
    } else if (n >= 10 && n < 20) {
        return tenths[n - 10];
    } else if (n >= 20 && n < 100) {
        if (n % 10 === 0) {
            return dozens[n / 10 - 2];
        } else {
            return `${dozens[(n - n % 10) / 10 - 2]} ${units[n % 10]}`;
        }
    } else if (n >= 100 && n <= 999) {
        if (n % 100 === 0) {
            return hundreds[n / 100 - 1];
        } else if (number[1] == 0) {
            return `${hundreds[(n - n % 100) / 100 - 1]} ${units[n % 100]}`;
        } else if (number[1] == 1) {
            return `${hundreds[(n - n % 100) / 100 - 1]} ${tenths[n % 10]}`;
        } else {
            if (n % 10 === 0) {
                return `${hundreds[(n - n % 100) / 100 - 1]} ${dozens[(n % 100) / 10 - 2]}`;
            } else {
                return `${hundreds[(n - n % 100) / 100 - 1]} ${dozens[((n % 100) - ((n % 100) % 10)) / 10 - 2]} ${units[(n % 100) % 10]}`;
            }
        }
    }
}
console.log(getStringView(684));


// Task 3
    function getNumberView(stringNum) {
        if(typeof stringNum !== 'string') {
            return false;
        }
        let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let hundreds = ['hundred'];
        let scales = {'thousand': 1000 , 'million':100000, 'billion':1000000000};

        stringNum = stringNum.replaceAll('-', ' ');
        let arr = stringNum.split(' ');
        let result = 0;
        let value = 0;

        for (let i = 0; i < arr.length; i++) {
            if (digits.includes(arr[i])) {
                value = value + digits.indexOf(arr[i]);
            } else if (dozens.includes(arr[i])) {
                value = value + dozens.indexOf(arr[i]) * 10;
            } else if (arr[i] === 'hundred') {
                value = value * 100;
            } else if (scales.hasOwnProperty(arr[i])) {
                value = value * scales[arr[i]];
                result = result + value;
                value = 0;
            }
        }
        if (value !== 0) {
            result = result + value;
        }
        return result
    }

    console.log(getNumberView('two thousand seven hundred fifty-eight'))

// Task 4
    function getDistance(x1, y1, x2, y2) {
        return Math.round(Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))));
    }

    console.log(getDistance(88, 52, -9, 0))


    exports.getDayOfWeek = getDayOfWeek;
    exports.getStringView = getStringView;
    exports.getNumberView = getNumberView;
    exports.getDistance = getDistance;



