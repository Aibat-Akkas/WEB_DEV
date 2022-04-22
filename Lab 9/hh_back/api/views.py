from django.http import HttpResponse
from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from api.models import Vacancy, Company

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    
    return JsonResponse(vacancy.to_json())

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)

        try:
            company = Company.objects.create(name=data['name'], description=data['description'], city=data['city'], address=data['address'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(company.to_json())

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())

    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.address = data['address']
        company.save()
        return JsonResponse(company.to_json())

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({}, status=204)

def company_vacancy(request, company_id):
    try:
        vacancies = Vacancy.objects.all().filter(company_id=company_id)
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(vacancies_json, safe=False)

def vacancy_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)