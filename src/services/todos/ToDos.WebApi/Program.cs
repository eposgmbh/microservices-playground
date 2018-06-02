using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using Gelf.Extensions.Logging;

using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

#pragma warning disable 1591

namespace ToDos.WebApi
{
    public class Program
    {
        public static void Main(string[] args) {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost
                .CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseUrls("http://0.0.0.0:5000")
                .ConfigureLogging((context, builder) => {
                    builder.Services.Configure<GelfLoggerOptions>(context.Configuration.GetSection("Graylog"));

                    builder.Services.PostConfigure<GelfLoggerOptions>(options => {
                        options.AdditionalFields["tag"] = "todos-service";
                    });

                    builder
                        .AddConfiguration(context.Configuration.GetSection("Logging"))
                        .AddConsole()
                        .AddDebug()
                        .AddGelf();
                });
    }
}
