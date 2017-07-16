# frozen_string_literal: true

class MicroblogAppController < ApplicationController
  layout "microblog"

  def index
    initialState = {
      authenticity: form_authenticity_token,
      user: session[:current_user]
    }

    @microblog_props = initialState
  end
end
