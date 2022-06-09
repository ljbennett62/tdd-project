package main

import (
	"fmt"
	s "tdd/stocks"
	"testing"
)

func assertEqual(t *testing.T, expected s.Money, actual s.Money) {
	if expected != actual {
		t.Errorf("Expected %+v Got %+v", expected, actual)
	}
}

func TestMultiplication(t *testing.T) {
	fiver := s.NewMoney{amount: 5, currency: "USD"}
	fmt.Println("orig2", fiver)
	actualResult := fiver.Times(2)
	expectedResult := s.NewMoney{amount: 10, currency: "USD"}
	assertEqual(t, expectedResult, actualResult)
}

func TestMultiplicationInEuros(t *testing.T) {
	//tenEuros := s.NewMoney{10, "EUR"}
	//actualResult := tenEuros.Times(2)
	//expectedResult := s.NewMoney{20, "EUR"}

	//	tenEuros := new(s.Money)
	//	tenEuros.NewMoney(10, "USD")
	//	actualResult := tenEuros.Times(2)

	//	dummyVal := new(s.Money)
	//	dummyVal.NewMoney(20, "USD")
	//	expectedResult := dummyVal.Times(1)
	//	assertEqual(t, expectedResult, actualResult)
}

func TestDivision(t *testing.T) {
	//originalMoney := s.NewMoney{4002, "KRW"}
	//actualResult := originalMoney.Divide(4)
	//expectedResult := s.NewMoney{1000.5, "KRW"}
	//assertEqual(t, expectedResult, actualResult)

	//	originalMoney := new(s.Money)
	//	originalMoney.NewMoney(4002, "KRW")
	//	fmt.Println("orig1", originalMoney)
	//	actualResult := originalMoney.Divide(4)
	//	fmt.Println("orig2", originalMoney)

	//	dummyVal := new(s.Money)
	//	dummyVal.NewMoney(1000.5, "KRW")
	//	expectedResult := dummyVal.Divide(1)
	//	assertEqual(t, expectedResult, actualResult)
}

func TestAddition(t *testing.T) {
	//	var portfolio s.Portfolio
	//	var portfolioInDollars s.Money

	//	fiveDollars := new(s.Money)
	//	fiveDollars.NewMoney(5, "USD")
	//	fDollars := fiveDollars.Times(1)
	//	fmt.Println(fiveDollars)

	//actualResult := tenEuros.Times(2)
	//	tenDollars := new(s.Money)
	//	tenDollars.NewMoney(10, "USD")
	//	tDollars := tenDollars.Times(1)

	//	fifteenDollars := new(s.Money)
	//	fifteenDollars.NewMoney(15, "USD")
	//	fifDollars := fifteenDollars.Times(1)

	//	portfolio = portfolio.Add(fDollars)
	//	portfolio = portfolio.Add(tDollars)
	//	portfolioInDollars = portfolio.Evaluate("USD")

	//	assertEqual(t, fifDollars, portfolioInDollars)
}
