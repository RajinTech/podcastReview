CarrierWave.configure do |config|
  if !Rails.env.test?
    config.fog_credentials = {
      provider: "AWS",
      aws_access_key_id: ENV["AKIAJYHXKLMAZPAAK23A"],
      aws_secret_access_key: ENV["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"]
    }
    if Rails.env.production?
      config.fog_directory = ENV["podcast-review-production"]
    else
      config.fog_directory  = ENV["podcast-review-development"]
    end
  end
endNT_S3_BUCKET=podcast-review-development
