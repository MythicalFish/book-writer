<%
error = ''
if message.kind_of?(Array)
  message.each do |m|
    error += "#{m}\n"
  end
else
  error = message
end
%>
alert('<%== j error %>')
