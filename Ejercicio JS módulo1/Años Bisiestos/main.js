var leapYearInterval = 4;
var currentYear = 2017;
var givenYear = 2050;
var targetYear = givenYear - 1;

var targetLeapYear = targetYear - targetYear % leapYearInterval;
var totalLeapYears = targetLeapYear / leapYearInterval;

var lastLeapYear = currentYear - currentYear % leapYearInterval;
var elapsedLeapYears = lastLeapYear / leapYearInterval;

var result = totalLeapYears - elapsedLeapYears;

console.log(result);
