$word = New-Object -ComObject Word.Application
$doc = $word.Documents.Open('c:\Users\Lenovo\Documents\portfolio\Website PortFolio.docx')
$doc.Content.Text | Out-File -FilePath 'c:\Users\Lenovo\Documents\portfolio\extracted_text.txt' -Encoding utf8
$doc.Close()
$word.Quit()
