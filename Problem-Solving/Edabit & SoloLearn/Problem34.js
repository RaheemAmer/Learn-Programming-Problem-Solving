// العد التنازلي بثلاثة

// قُم بكتابة دالة تستقبل عدد صحيح integer. تقوم هذه الدالة بالعد التنازلي من ذلك العدد بثلاث أرقام وصولاً إلى الصفر، ومن ثم إرجاع مصفوفة من الأعداد الزوجية لذلك العد التنازلي مرتبة تصاعدياً. في حال كان العد التنازلي لا يحتوي على الأعداد (لأن الحد المُمر يساوي 3 أو أقل) سيتم إرجاع القيمة [0].

function divisible_by_five(num) {
    if (num % 5 == 0) {
        return true;
    }
    else {
        return false;
    }
}