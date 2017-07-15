# frozen_string_literal: true

class MicroblogAppController < ApplicationController
  layout "microblog"

  def index
    @microblog_props = { name: "Stranger" }
  end
end
