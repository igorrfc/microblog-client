# frozen_string_literal: true

class MicroblogAppController < ApplicationController
  layout "microblog"

  def index
    initialState = {
      users: { current: session[:current_user] }
    }

    @microblog_props = initialState
  end
end
