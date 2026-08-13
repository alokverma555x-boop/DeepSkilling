using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Send_Button
{
    internal static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());
        }

        private async void btnSend_Click(object sender, EventArgs e)
        {
            var config = new ProducerConfig { BootstrapServers = "localhost:9092" };
            using (var producer = new ProducerBuilder<Null, string>(config).Build())
            {
                await producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = txtMessage.Text });
            }
        }

        private void StartListening()
        {
            Task.Run(() => {
                var config = new ConsumerConfig { BootstrapServers = "localhost:9092", GroupId = "win-form-group" };
                using (var consumer = new ConsumerBuilder<Ignore, string>(config).Build())
                {
                    consumer.Subscribe("chat-topic");
                    while (true)
                    {
                        var cr = consumer.Consume();
                        // Use Invoke to update UI from background thread
                        this.Invoke(new Action(() => listBoxChat.Items.Add(cr.Message.Value)));
                    }
                }
            });
        }
    }
}
