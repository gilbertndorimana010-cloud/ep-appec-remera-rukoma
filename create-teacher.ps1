$SUPABASE_URL = "https://fyeubxipsmqfbnfywfkd.supabase.co"

$SERVICE_KEY = Read-Host "Paste your Supabase secret key"

$FullName = Read-Host "Teacher Full Name"
$Email    = Read-Host "Teacher Email"
$Password = Read-Host "Teacher Password"
$Phone    = Read-Host "Teacher Phone"
$Subject  = Read-Host "Teacher Subject"

$headers = @{
    apikey = $SERVICE_KEY
    Authorization = "Bearer $SERVICE_KEY"
    "Content-Type" = "application/json"
}

$authBody = @{
    email = $Email
    password = $Password
    email_confirm = $true
} | ConvertTo-Json

try {

    $user = Invoke-RestMethod `
        -Uri "$SUPABASE_URL/auth/v1/admin/users" `
        -Method POST `
        -Headers $headers `
        -Body $authBody

    $teacherBody = @{
        full_name = $FullName
        email = $Email
        phone = $Phone
        subject = $Subject
    } | ConvertTo-Json

    Invoke-RestMethod `
        -Uri "$SUPABASE_URL/rest/v1/teachers" `
        -Method POST `
        -Headers $headers `
        -Body $teacherBody

    Write-Host ""
    Write-Host "====================================" -ForegroundColor Green
    Write-Host "TEACHER CREATED SUCCESSFULLY" -ForegroundColor Green
    Write-Host "====================================" -ForegroundColor Green
    Write-Host "Name: $FullName"
    Write-Host "Email: $Email"
    Write-Host "Subject: $Subject"
    Write-Host ""

}
catch {
    Write-Host ""
    Write-Host "ERROR CREATING TEACHER" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}