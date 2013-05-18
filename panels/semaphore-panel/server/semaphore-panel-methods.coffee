Meteor.methods

  fetchSemaphore: (projectHashId, branchId) ->
    url = "https://semaphoreapp.com/api/v1/projects/#{projectHashId}/#{branchId}/status?auth_token=" + process.env.SEMAPHORE_AUTH_TOKEN

    result = Meteor.http.get url
    if result.statusCode is 200
      return JSON.parse result.content
    else
      errorJson = JSON.parse(result.content)
      throw new Meteor.Error(result.statusCode, errorJson.error)